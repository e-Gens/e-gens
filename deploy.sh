#!/bin/sh
# Variáveis via Travis Secrets

sshpass -p $PASSWD sftp -P 2222 -v -o StrictHostKeyChecking=no $USER@$HOST <<END_SCRIPT
progress
rm $REMOTE_ROOT/$LOCAL_ROOT/$FILE
put -r $LOCAL_ROOT $REMOTE_ROOT
bye
END_SCRIPT
exit 0

