import {BaseCollectionPaginationCountResponse, WindowsPhone81CustomConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsPhone81CustomConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsPhone81CustomConfiguration[];
}
