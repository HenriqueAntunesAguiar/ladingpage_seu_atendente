import os

from dotenv import load_dotenv
# from .calculate_tokens import calculte_tokens

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.prompts import ChatPromptTemplate

import sys
from my_prompts import Prompts

def Create_Chain(sys_prompt, memory, user_input):
    
    # if len(memory.chat_memory.messages) > 20:
    #     memory = memory[2:]  
    
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
        temperature=0.2,
        max_output_tokens=8192,
        response_modalities=[0]
    )  
    
    chain = prompt | llm
    
    answer = chain.invoke({'sys_prompt':sys_prompt,
                          'question':user_input})
    
    memory.chat_memory.add_user_message(user_input)

    memory.chat_memory.add_ai_message(answer.content)
    
    print(memory)
    return answer, memory

sys_prompt = Prompts.restaurant_assistent()
memory=[]
while True:
    user_input = input("User:")
    answer, memory = Create_Chain(sys_prompt, memory, user_input)