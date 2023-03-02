import { Persistent, type BasicKeys } from '/@/utils/cache/persistent'
import { CacheTypeEnum, TOKEN_KEY } from '/@/enums/cacheEnum'
import projectSetting from '/@/settings/projectSetting'

const { permissionCacheType } = projectSetting
const isLocal = permissionCacheType === CacheTypeEnum.LOCAL

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getToken() {
  return getAuthCache(TOKEN_KEY)
}

export function getAuthCache<T>(key: BasicKeys): T {
  const fn = isLocal ? Persistent.getLocal : Persistent.getSession
  return fn(key) as T
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function setAuthCache(key: BasicKeys, value) {
  const fn = isLocal ? Persistent.setLocal : Persistent.setSession
  fn(key, value, true)
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function clearAuthCache(immediate = true) {
  const fn = isLocal ? Persistent.clearLocal : Persistent.clearSession
  fn(immediate)
}
