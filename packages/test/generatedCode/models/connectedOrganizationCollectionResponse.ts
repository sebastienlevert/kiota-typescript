import {BaseCollectionPaginationCountResponse, ConnectedOrganization} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConnectedOrganizationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ConnectedOrganization[];
}
