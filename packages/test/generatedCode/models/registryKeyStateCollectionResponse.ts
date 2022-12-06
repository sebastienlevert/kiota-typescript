import {BaseCollectionPaginationCountResponse, RegistryKeyState} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RegistryKeyStateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RegistryKeyState[];
}
