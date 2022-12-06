import {OmaSetting} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingInteger extends OmaSetting, Partial<Parsable> {
    /** Value. */
    value?: number;
}
