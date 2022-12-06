import {DeviceConfiguration, OmaSetting} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AndroidCustomConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** OMA settings. This collection can contain a maximum of 1000 elements. */
    omaSettings?: OmaSetting[];
}
