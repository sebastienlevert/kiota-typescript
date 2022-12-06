import {OmaSetting} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OmaSettingDateTime extends OmaSetting, Partial<Parsable> {
    /** Value. */
    value?: Date;
}
