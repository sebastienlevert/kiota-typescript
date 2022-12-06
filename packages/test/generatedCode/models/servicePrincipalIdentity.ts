import {Identity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServicePrincipalIdentity extends Identity, Partial<Parsable> {
    /** The application identifier of the service principal. */
    appId?: string;
}
