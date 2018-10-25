#!/bin/sh
# Variáveis via Travis Secrets

sshpass -p $PASSWD sftp -v -oIdentityFile='src/assets/ssh/id_rsa' -P $SRV_PORT $USER@$HOST <<END_SCRIPT
progress
rm $REMOTE_ROOT/$LOCAL_ROOT/$FILE
put -r $LOCAL_ROOT $REMOTE_ROOT
bye
END_SCRIPT
exit 0

