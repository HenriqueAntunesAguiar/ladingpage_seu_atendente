from django.shortcuts import render
from app.scripts.my_prompts import Prompts
from app.scripts.chatbot import Create_Chain, ProcessGemini, dic_to_history, history_to_dic
from django.http import JsonResponse
from django.contrib.sessions.backends.db import SessionStore

def Chat(request):
    
    if request.method == 'GET':
        request.session['chat_history'] = {'messages':[]}
        
    if not request.session.session_key:
        request.session.create()
    
    if 'chat_history' not in request.session:
        request.session['chat_history'] = {'messages':[]}
        
    if request.method == 'POST':
        
        chat_history = request.session['chat_history']
        
        print('chat_history:',chat_history)
        
        sys_prompt = Prompts.mecanic_assistent(chat_history)
        
        chat_history = dic_to_history(chat_history)
        
        answer, memory = Create_Chain(request, sys_prompt, chat_history)
        
        chat_history = history_to_dic(memory)
                
        request.session['chat_history'] = chat_history
        
        return JsonResponse()
        
    return render(request, 'chat.html', {})

