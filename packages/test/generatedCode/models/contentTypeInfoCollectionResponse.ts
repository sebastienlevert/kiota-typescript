import {BaseCollectionPaginationCountResponse, ContentTypeInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContentTypeInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ContentTypeInfo[];
}
