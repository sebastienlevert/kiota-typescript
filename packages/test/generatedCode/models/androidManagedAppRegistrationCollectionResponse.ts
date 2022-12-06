import {AndroidManagedAppRegistration, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidManagedAppRegistrationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AndroidManagedAppRegistration[];
}
