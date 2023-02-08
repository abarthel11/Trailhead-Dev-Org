public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static Contact[] getContacts(){
        try {
            throw new AuraHandledException('Forced Error');

            // return [
            //     SELECT FirstName, LastName, Email
            //     FROM Contact
            // ];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}