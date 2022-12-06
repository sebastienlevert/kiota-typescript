import {Identity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningServicePrincipal extends Identity, Partial<Parsable> {
}
