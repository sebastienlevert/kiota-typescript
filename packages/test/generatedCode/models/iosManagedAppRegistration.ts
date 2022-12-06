import {ManagedAppRegistration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosManagedAppRegistration extends ManagedAppRegistration, Partial<Parsable> {
}
