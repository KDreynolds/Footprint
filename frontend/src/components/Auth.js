import React, { useState } from "react";
import { useRouter } from "next/router";
import FormAlert from "components/FormAlert";
import AuthForm from "components/AuthForm";
import AuthSocial from "components/AuthSocial";

function Auth(props) {
  const router = useRouter();
  const [formAlert, setFormAlert] = useState(null);

  const handleAuth = (user) => {
    router.push(props.afterAuthPath);
  };

  const handleFormAlert = (data) => {
    setFormAlert(data);
  };

  return (
    <>
      {formAlert && (
        <div className="mb-4">
          <FormAlert type={formAlert.type} message={formAlert.message} />
        </div>
      )}

      <AuthForm
        type={props.type}
        buttonAction={props.buttonAction}
        onAuth={handleAuth}
        onFormAlert={handleFormAlert}
      />

      {["signup", "signin"].includes(props.type) && (
        <>
          {props.providers && props.providers.length && (
            <AuthSocial
              buttonAction={props.buttonAction}
              providers={props.providers}
              showLastUsed={true}
              onAuth={handleAuth}
              onError={(message) => {
                handleFormAlert({
                  type: "error",
                  message: message,
                });
              }}
            />
          )}
        </>
      )}
    </>
  );
}

export default Auth;
