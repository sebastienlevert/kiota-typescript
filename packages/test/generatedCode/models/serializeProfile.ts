import {Profile} from './index';
import {serializeEducationalActivity} from './serializeEducationalActivity';
import {serializeEntity} from './serializeEntity';
import {serializeItemAddress} from './serializeItemAddress';
import {serializeItemEmail} from './serializeItemEmail';
import {serializeItemPatent} from './serializeItemPatent';
import {serializeItemPhone} from './serializeItemPhone';
import {serializeItemPublication} from './serializeItemPublication';
import {serializeLanguageProficiency} from './serializeLanguageProficiency';
import {serializePersonAnnotation} from './serializePersonAnnotation';
import {serializePersonAnnualEvent} from './serializePersonAnnualEvent';
import {serializePersonAward} from './serializePersonAward';
import {serializePersonCertification} from './serializePersonCertification';
import {serializePersonInterest} from './serializePersonInterest';
import {serializePersonName} from './serializePersonName';
import {serializePersonWebsite} from './serializePersonWebsite';
import {serializeProjectParticipation} from './serializeProjectParticipation';
import {serializeSkillProficiency} from './serializeSkillProficiency';
import {serializeUserAccountInformation} from './serializeUserAccountInformation';
import {serializeWebAccount} from './serializeWebAccount';
import {serializeWorkPosition} from './serializeWorkPosition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProfile(writer: SerializationWriter, profile: Profile | undefined = {}) : void {
        serializeEntity(writer, profile)
            writer.writeCollectionOfObjectValuesFromMethod("account", profile.account as any, serializeUserAccountInformation);
            writer.writeCollectionOfObjectValuesFromMethod("addresses", profile.addresses as any, serializeItemAddress);
            writer.writeCollectionOfObjectValuesFromMethod("anniversaries", profile.anniversaries as any, serializePersonAnnualEvent);
            writer.writeCollectionOfObjectValuesFromMethod("awards", profile.awards as any, serializePersonAward);
            writer.writeCollectionOfObjectValuesFromMethod("certifications", profile.certifications as any, serializePersonCertification);
            writer.writeCollectionOfObjectValuesFromMethod("educationalActivities", profile.educationalActivities as any, serializeEducationalActivity);
            writer.writeCollectionOfObjectValuesFromMethod("emails", profile.emails as any, serializeItemEmail);
            writer.writeCollectionOfObjectValuesFromMethod("interests", profile.interests as any, serializePersonInterest);
            writer.writeCollectionOfObjectValuesFromMethod("languages", profile.languages as any, serializeLanguageProficiency);
            writer.writeCollectionOfObjectValuesFromMethod("names", profile.names as any, serializePersonName);
            writer.writeCollectionOfObjectValuesFromMethod("notes", profile.notes as any, serializePersonAnnotation);
            writer.writeCollectionOfObjectValuesFromMethod("patents", profile.patents as any, serializeItemPatent);
            writer.writeCollectionOfObjectValuesFromMethod("phones", profile.phones as any, serializeItemPhone);
            writer.writeCollectionOfObjectValuesFromMethod("positions", profile.positions as any, serializeWorkPosition);
            writer.writeCollectionOfObjectValuesFromMethod("projects", profile.projects as any, serializeProjectParticipation);
            writer.writeCollectionOfObjectValuesFromMethod("publications", profile.publications as any, serializeItemPublication);
            writer.writeCollectionOfObjectValuesFromMethod("skills", profile.skills as any, serializeSkillProficiency);
            writer.writeCollectionOfObjectValuesFromMethod("webAccounts", profile.webAccounts as any, serializeWebAccount);
            writer.writeCollectionOfObjectValuesFromMethod("websites", profile.websites as any, serializePersonWebsite);
}
