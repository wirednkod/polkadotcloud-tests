// import {
//   useExtensionAccounts,
//   useExtensions,
// } from "@polkadot-cloud/react/hooks";

export const ExtensionsFound = () => {
  // const {extensionsStatus} = useExtensions();
  // const { connectExtensionAccounts } =
  //   useExtensionAccounts();

  //   console.log("extensionsStatus", extensionsStatus);
  return (
    <>
      {/* <ul>
        {extensionsStatus.map((x) => (
          <li key={x.id}>
            {x.title}:{" "}
            <a target="_blank" href={`http://${x.website}`}>
              {x.website}
            </a>
            <br />
            <span>Version: {x.version}</span>
            <br />
            <button
              type="button"
              onClick={() => {
                const ext = extensions.find((e) => e.id === x.id);
                if (ext) {
                  connectExtensionAccounts(ext);
                }
              }}
            >
              {x.title} is {extensionsStatus[x.id] || "disconnected"}
            </button>
            <hr />
          </li>
        ))}
      </ul>
      <h3>
        {extensions.length ? "Accounts found" : "No extensions are installed"}
      </h3>
      <ul>
        <li>
          {extensionAccounts?.map((account) => (
            <p key={account.address}>{account.address}</p>
          ))}
        </li>
      </ul> */}
    </>
  );
};
