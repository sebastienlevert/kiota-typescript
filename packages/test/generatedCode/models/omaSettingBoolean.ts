import {OmaSetting} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingBoolean extends OmaSetting, Partial<Parsable> {
    /** Value. */
    value?: boolean;
}
