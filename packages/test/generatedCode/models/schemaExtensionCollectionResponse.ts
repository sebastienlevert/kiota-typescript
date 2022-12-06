import {BaseCollectionPaginationCountResponse, SchemaExtension} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SchemaExtensionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SchemaExtension[];
}
