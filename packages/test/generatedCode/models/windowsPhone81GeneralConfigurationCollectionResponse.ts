import {BaseCollectionPaginationCountResponse, WindowsPhone81GeneralConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsPhone81GeneralConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsPhone81GeneralConfiguration[];
}
