import {BaseCollectionPaginationCountResponse, IosManagedAppRegistration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosManagedAppRegistrationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosManagedAppRegistration[];
}
