import { useState } from "react"
import { AppId } from ".."
import { findApp, useAppManager } from "../../IOS"
import { useAppLayout } from "../com.apple.launcher/layout"

export const useInstallApp = (appId: AppId) => {
  const { addApp, isAppInstalled } = useAppLayout(({ addApp, isAppInstalled }) => ({ addApp, isAppInstalled }))
  const loadApp = useAppManager(state => state.loadApp)
  const [installing, setInstalling] = useState(false)
  const installed = isAppInstalled(appId)

  const installApp = async () => {
    setInstalling(true)
    addApp(appId) // add it the home screen
    await loadApp(appId) // install it
    setInstalling(false)

  }

  return { installApp, installing, installed }
}