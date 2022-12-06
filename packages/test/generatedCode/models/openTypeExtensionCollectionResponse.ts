import {BaseCollectionPaginationCountResponse, OpenTypeExtension} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OpenTypeExtensionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OpenTypeExtension[];
}
