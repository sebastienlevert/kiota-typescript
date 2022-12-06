import {OmaSetting} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingFloatingPoint extends OmaSetting, Partial<Parsable> {
    /** Value. */
    value?: number;
}
