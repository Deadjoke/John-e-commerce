import * as zod from 'zod'
import { Loginschema } from './login.schema'

export type loginFormType = zod.infer<typeof Loginschema>