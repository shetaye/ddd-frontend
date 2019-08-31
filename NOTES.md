# Views
## Home
## Dashboard
## Proposal List
## Proposal Detail
## Create Proposal
## Configure Server
# Componenets
## AppNavigation
Buttons: 
* Dashboard
* New Proposal
* Sign In

# TODO list
## Goals
* Add option buttons to view Proposals and Users as either cards or lists (Currently only cards are offered)
* Build object pages for Proposal, Server, and User
* Formally define API

# Mind Mapping Stuff
## Goals
* Allow Discord Users to create proposals that execute actions on one of the servers they belong too.  Other users on the same server will be able to vote on the proposals to determine if they pass.
    * Users will be able to create proposals
    * Users will be able to view existing proposals for their server
    * Users will be able to vote on existing proposals for their server

## Objects
* Discord User
    * Username - Handled by Discord?
    * Proposals by
    * Server List - Handled by Discord?
* Proposal
    * Name?
    * Votes
    * Author
    * Created on
    * Server
    * Actions xN
* Server
    * Proposals on
    * User List - Handled by Discord?


# Restructuring

## Vuex store
Some things don't need to be in the store.  `autocomplete`, `proposal`, `server`, and `user` don't need to be in the store.  (User will be duplicated and there will be a store module called `currentUser`)

Old module list:
* auth
* autocomplete
* live ?????
* proposal
* server
* user

New module list:
* auth
* live ?????
* currentUser

Makes way more sense to have those in global space (because they're used EVERYWHERE)

## Services
Services will serve a new role.  The services for the new module list (and each module) will be *moved into the new modules*.

Old service list:
* api?
* auth
* autocomplete
* proposal
* server
* user

New service list:
* proposal
* server
* user
* autocomplete

## Views
Right now, my views serve as little more than wrappers to add components into.  The views should be where all store access happens, so they'll tie together things like the login component and data presentation components.  They'll also be where I store my data for `proposal`s, `server`s, and `user`s when those pages are open.  Views will also directly interact with the service list, the same way Vuex used to do.

## Components
Components currently are where all application logic happen (on the frontend).  However, I'm going to start using them only as DOM elements (presentation devices).  My components will also have to change significantly.

## Process
How will the change happen?
1. Gut the components and move their innards to views.  Components will now use props instead of vuex store access
2. Replace the vuex store access in components with store access in views
3. Replace vuex store access in views with service access by moving the code