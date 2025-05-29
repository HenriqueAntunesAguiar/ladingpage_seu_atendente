def calculte_tokens(request, answer):
    
    CUSTO_ENTRADA_FLASH = 0.075
    CUSTO_SAIDA_FLASH = 0.30

    CUSTO_ENTRADA_PRO = 3.5
    CUSTO_SAIDA_PRO = 10.50
    
    question_tokens = answer.usage_metadata['input_tokens']
    answer_tokens = answer.usage_metadata['output_tokens']
    
    print('answer:',answer)
    print('question_tokens', question_tokens, 'answer_tokens', answer_tokens)
    total_cost = (question_tokens * CUSTO_ENTRADA_FLASH) / 1000000 + (answer_tokens * CUSTO_SAIDA_FLASH) / 1000000
    
    new_value_input_token = value_input_token + ((question_tokens * CUSTO_ENTRADA_FLASH) / 1000000)
    new_value_output_token = value_output_token + ((answer_tokens * CUSTO_SAIDA_FLASH) / 1000000)
    new_total_value_token = total_value_token + (new_value_input_token + new_value_output_token)
    
    new_input_token = input_token + question_tokens
    new_output_token = output_token + answer_tokens
    new_total_token = total_token + (new_input_token + new_output_token)
    
    return new_value_input_token, new_value_output_token, new_total_value_token, new_input_token, new_output_token, new_total_token