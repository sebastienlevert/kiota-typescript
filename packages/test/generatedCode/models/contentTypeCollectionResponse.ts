import {BaseCollectionPaginationCountResponse, ContentType} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContentTypeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ContentType[];
}
