import json
import os

from dotenv import load_dotenv
from app.scripts.calculate_tokens import calculte_tokens
from django.http import JsonResponse

from google.generativeai.types import GenerationConfig
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage, AIMessage
from langchain.prompts import ChatPromptTemplate
from langchain.memory import ConversationBufferMemory

def dic_to_history(chat_history):
    memory = ConversationBufferMemory(return_messages=True)
    for msg in chat_history["messages"]:
        if msg["type"] == "human":
            memory.chat_memory.add_user_message(msg["content"])
        elif msg["type"] == "ai":
            memory.chat_memory.add_ai_message(msg["content"])
    
    return memory

def history_to_dic(memory):
    messages = []
    for msg in memory.chat_memory.messages:
        if isinstance(msg, HumanMessage):
            messages.append({"type": "human", "content": msg.content})
        elif isinstance(msg, AIMessage):
            messages.append({"type": "ai", "content": msg.content})
    
    return {"messages": messages}

def Create_Chain(request, sys_prompt, memory):
    
    question = json.loads(request.body)['pergunta']
    
    if len(memory.chat_memory.messages) > 20:
        memory = memory[2:]  
    
    print(f'Quantidade histórico: {len(memory.chat_memory.messages)}\n {memory.chat_memory.messages}')
    
    prompt = ChatPromptTemplate.from_messages(
        [
            (
                'system',
                '{sys_prompt}'
            ),
            (
                'user',
                [
                    {
                        'type':'text',
                        'text':'{question}'
                    }
                ]
            )
        ]
    )
    
    load_dotenv(os.getcwd()+r'\app\.env')
    MODEL = 'gemini-2.0-flash-lite'
    
    llm = ChatGoogleGenerativeAI(
        api_key=os.getenv('API_KEY'),
        model=MODEL,
        temperature=2,
        generation_config=GenerationConfig(
            max_output_tokens=8192,
            response_mime_type="text/plain"
        )
    )  
    
    chain = prompt | llm
    
    print(f'sys_prompt: {sys_prompt}')
    answer = chain.invoke({'sys_prompt':sys_prompt,
                          'question':question})
    
    memory.chat_memory.add_user_message(question)

    memory.chat_memory.add_ai_message(answer.content)
    
    return answer, memory

def ProcessGemini(request, answer):
    
    value_input_token = float(json.loads(request.body)['tokens_entrada_valor'].split(' ')[1].replace(',','.'))
    value_output_token = float(json.loads(request.body)['tokens_saida_valor'].split(' ')[1].replace(',','.'))
    total_value_token = float(json.loads(request.body)['tokens_total_valor'].split(' ')[1].replace(',','.'))
    
    input_token = int(json.loads(request.body)['tokens_entrada'])
    output_token = int(json.loads(request.body)['tokens_saida'])
    total_token = int(json.loads(request.body)['tokens_totais'])
    
    new_value_input_token, new_value_output_token,new_total_value_token, new_input_token, new_output_token,new_total_token = calculte_tokens(value_input_token, value_output_token, total_value_token, input_token, output_token, total_token, answer)
    
    return {'resposta':answer.content,
            'tokens_entrada_valor':f'U$ {str(new_value_input_token).replace('.',',')}',
            'tokens_saida_valor':f'U$ {str(new_value_output_token).replace('.',',')}',
            'tokens_total_valor':f'U$ {str(new_total_value_token).replace('.',',')}',
            'tokens_entrada':f'{str(new_input_token)}',
            'tokens_saida':f'{str(new_output_token)}',
            'tokens_totais':f'{str(new_total_token)}',
            }

