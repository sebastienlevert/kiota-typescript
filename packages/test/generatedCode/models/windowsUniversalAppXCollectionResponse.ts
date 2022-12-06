import {BaseCollectionPaginationCountResponse, WindowsUniversalAppX} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsUniversalAppXCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsUniversalAppX[];
}
