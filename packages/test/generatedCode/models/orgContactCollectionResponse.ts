import {BaseCollectionPaginationCountResponse, OrgContact} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OrgContactCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OrgContact[];
}
