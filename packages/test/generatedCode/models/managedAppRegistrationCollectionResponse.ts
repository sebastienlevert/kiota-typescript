import {BaseCollectionPaginationCountResponse, ManagedAppRegistration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppRegistrationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedAppRegistration[];
}
