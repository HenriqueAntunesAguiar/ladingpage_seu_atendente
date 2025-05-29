from langchain.memory import ConversationBufferMemory
from langchain_core.messages import HumanMessage, AIMessage

class HelperLangChain:
    
    def dic_to_LangChainHistory(dic):
        memory = ConversationBufferMemory(return_messages=True)
        for msg in dic["messages"]:
            if msg["type"] == "human":
                memory.chat_memory.add_user_message(msg["content"])
            elif msg["type"] == "ai":
                memory.chat_memory.add_ai_message(msg["content"])
    
        return memory
 

    def LangChainHistory_to_dic(LangChainHistory):
        messages = []
        for msg in LangChainHistory.chat_memory.messages:
            if isinstance(msg, HumanMessage):
                messages.append({"type": "human", "content": msg.content})
            elif isinstance(msg, AIMessage):
                messages.append({"type": "ai", "content": msg.content})
        
        return messages