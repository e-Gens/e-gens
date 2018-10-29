#!/bin/sh
# Variáveis via Travis Secrets


# ==================================================
# rm => remove arquivos no servidor
# put => envia arquivos ao servidor
# progress => exibe o progresso
# bye => encerra a conexão
# --------------------------------------------------
SCRIPT="progress;
rm $REMOTE_ROOT/$LOCAL_ROOT/$FILE;
rm $REMOTE_ROOT/$LOCAL_ROOT/css/$FILE;
rm $REMOTE_ROOT/$LOCAL_ROOT/js/$FILE;
rm $REMOTE_ROOT/$LOCAL_ROOT/img/$FILE;
progress;
put -r $LOCAL_ROOT $REMOTE_ROOT;
bye;
"

# ==================================================
# sshpass => programa para entrada de senha no sftp
# -p [] => senha
# --------------------------------------------------
# sftp => conexão via ssh para upload de arquivos
# -P [] => porta da conexão 
# -v => (verbose) com log de execução
# -o => opção ssh - sem validação restrita por chaves
# --------------------------------------------------
if [ "${TRAVIS_BRANCH}" = "master" ] && [ "${TRAVIS_PULL_REQUEST}" = "false" ]
# Deploy apenas no [master]
then
    sshpass -p $FTP_PASSWD sftp -P $FTP_PORT -v -o StrictHostKeyChecking=no $FTP_USER@$FTP_HOST $SCRIPT
fi
exit 0


