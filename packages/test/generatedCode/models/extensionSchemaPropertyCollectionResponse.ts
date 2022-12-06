import {BaseCollectionPaginationCountResponse, ExtensionSchemaProperty} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExtensionSchemaPropertyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ExtensionSchemaProperty[];
}
