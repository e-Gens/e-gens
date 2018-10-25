#!/bin/sh
# Variáveis via Travis Secrets

# ==================================================
# sshpass => programa para entrada de senha no sftp
# -p [] => senha
# --------------------------------------------------
# sftp => conexão via ssh para upload de arquivos
# -P [] => porta da conexão 
# -v => (verbose) com log de execução
# -o => opção ssh - sem validação restrita por chaves
# --------------------------------------------------
sshpass -p $FTP_PASSWD sftp -P $FTP_PORT -v -o StrictHostKeyChecking=no $FTP_USER@$FTP_HOST <<END_SCRIPT
progress
rm $REMOTE_ROOT/$LOCAL_ROOT/$FILE
rm $REMOTE_ROOT/$LOCAL_ROOT/css/$FILE
rm $REMOTE_ROOT/$LOCAL_ROOT/js/$FILE
rm $REMOTE_ROOT/$LOCAL_ROOT/img/$FILE
progress
put -r $LOCAL_ROOT $REMOTE_ROOT
bye
END_SCRIPT
exit 0
# ==================================================
# rm => remove arquivos no servidor
# put => envia arquivos ao servidor
# progress => exibe o progresso
# bye => encerra a conexão
# --------------------------------------------------

