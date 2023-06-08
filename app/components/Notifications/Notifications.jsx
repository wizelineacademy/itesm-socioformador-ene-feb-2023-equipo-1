import { useActionData } from '@remix-run/react';
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  DEFAULT_TOAST_CONFIG,
  CREATED_ANSWEBOT,
  POSITIVE_FEEDBACK_ANSWEBOT,
  NEGATIVE_FEEDBACK_ANSWEBOT,
  POSTED_ANSWEBOT,
} from 'app/utils/constants';
import {
  DEFAULT_ERROR_MESSAGE_BOT,
  DEFAULT_ERROR_MESSAGE_CREATE_BOT,
  DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT,
  DEFAULT_ERROR_MESSAGE_POST_BOT,

} from 'app/utils/backend/constants';
import useGlobalSuccessMessage from 'app/utils/hooks/useGlobalSuccessMessage';

function Notifications() {
  const globalSuccess = useGlobalSuccessMessage();
  const data = useActionData();

  useEffect(() => {
    if (globalSuccess
      && globalSuccess !== CREATED_ANSWEBOT
      && globalSuccess !== POSITIVE_FEEDBACK_ANSWEBOT
      && globalSuccess !== NEGATIVE_FEEDBACK_ANSWEBOT
      && globalSuccess !== POSTED_ANSWEBOT
    ) {
      toast.success(globalSuccess, DEFAULT_TOAST_CONFIG);
    }
    if (!data) return;

    const {
      error, errors, successMessage, warnings,
    } = data;

    if (error
      && error.message !== DEFAULT_ERROR_MESSAGE_CREATE_BOT
      && error.message !== DEFAULT_ERROR_MESSAGE_FEEDBACK_BOT
      && error.message !== DEFAULT_ERROR_MESSAGE_POST_BOT
    ) {
      toast.error(error.message, DEFAULT_TOAST_CONFIG);
    }

    if (errors && Array.isArray(errors)) {
      errors.forEach((_error) => {
        if (_error.message !== DEFAULT_ERROR_MESSAGE_BOT) {
          // console.error(_error.detail);
          toast.error(_error.message, DEFAULT_TOAST_CONFIG);
        }
      });
    }

    if (warnings && Array.isArray(warnings)) {
      warnings.forEach((warning) => {
        toast.warning(warning, DEFAULT_TOAST_CONFIG);
      });
    }

    if (successMessage) {
      toast.success(successMessage, DEFAULT_TOAST_CONFIG);
    }
  }, [data, globalSuccess]);

  return <ToastContainer />;
}

export default Notifications;
