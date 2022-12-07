import {Entity, SettingValue} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectorySetting extends Entity, Partial<Parsable> {
    /** Display name of this group of settings, which comes from the associated template. Read-only. */
    displayName?: string;
    /** Unique identifier for the template used to create this group of settings. Read-only. */
    templateId?: string;
    /** Collection of name-value pairs corresponding to the name and defaultValue properties in the referenced directorySettingTemplates object. */
    values?: SettingValue[];
}
