import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Nav = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <div>
      <h1>Keycloak authentication</h1>
      <hr />
      <p>Please push button !!!</p>
{!keycloak.authenticated ? (
        <button
          type="button"
          onClick={() =>
            keycloak.login()
          }
        >
          Login
        </button>
      ) : (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout ({keycloak.tokenParsed.preferred_username})
        </button>
      )}

      <hr />
      <div>{`User is ${
        !initialized || !keycloak.authenticated ? "NOT " : ""
      }authenticated`}</div>

    </div>
  );
};

export default Nav;
