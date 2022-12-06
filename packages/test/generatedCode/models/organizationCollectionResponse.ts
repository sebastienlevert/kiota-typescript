import {BaseCollectionPaginationCountResponse, Organization} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrganizationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Organization[];
}
