import {BaseCollectionPaginationCountResponse, ContentType} from '../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetCompatibleHubContentTypesResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ContentType[];
}
