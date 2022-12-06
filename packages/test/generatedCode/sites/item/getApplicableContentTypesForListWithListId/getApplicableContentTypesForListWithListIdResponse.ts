import {BaseCollectionPaginationCountResponse, ContentType} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetApplicableContentTypesForListWithListIdResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ContentType[];
}
