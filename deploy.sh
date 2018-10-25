#!/bin/sh
# Variáveis via Travis Secrets

sshpass -p $FTP_PASSWD sftp -P 2222 -v -o StrictHostKeyChecking=no $FTP_USER@$FTP_HOST <<END_SCRIPT
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

