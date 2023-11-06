import "@polkadot/api-augment"
import { useContext, useEffect, useState } from "react"
import { createContext } from "react"
import { useIsMountedRef } from "./useIsMountedRef"

import { ApiPromise, WsProvider } from "@polkadot/api"

const ApiContext = createContext<ApiPromise>({} as ApiPromise)

const useApi = (): ApiPromise => {
  return useContext<ApiPromise>(ApiContext)
}

const useApiCreate = (): ApiPromise => {
  const [api, setApi] = useState<ApiPromise>({} as ApiPromise)
  const mountedRef = useIsMountedRef()

  useEffect((): void => {
    const chooseNetwork = async (): Promise<void> => {
      try {
        const provider = new WsProvider("wss://rpc.polkadot.io")
        const api = await ApiPromise.create({ provider })
        console.log('api',api)
        mountedRef.current && setApi(api)
      } catch (err) {
        console.error("Error:", err)
      }
    }

    void chooseNetwork()
  }, [mountedRef])

  return api
}

export {
  ApiContext,
  useApi,
  useApiCreate
}