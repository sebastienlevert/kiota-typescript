import {OmaSetting} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingString extends OmaSetting, Partial<Parsable> {
    /** Value. */
    value?: string;
}
