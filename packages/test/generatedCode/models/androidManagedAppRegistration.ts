import {ManagedAppRegistration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidManagedAppRegistration extends ManagedAppRegistration, Partial<Parsable> {
}
