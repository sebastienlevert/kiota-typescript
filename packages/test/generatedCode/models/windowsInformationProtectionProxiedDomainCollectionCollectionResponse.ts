import {BaseCollectionPaginationCountResponse, WindowsInformationProtectionProxiedDomainCollection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionProxiedDomainCollectionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsInformationProtectionProxiedDomainCollection[];
}
