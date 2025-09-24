import * as zod from 'zod'
import { Registerschema } from './register.schema'

export type registerFormType = zod.infer<typeof Registerschema>