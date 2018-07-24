<template>
    <div>
        <li>{{fullName}}</li>
        <!-- Invoking a method from template-->
        <div>{{userLoaded('from template')}}</div>
    </div>
</template>

<script>
export default {
    name: 'UserListItem',
    props: ['firstName', 'lastName'],
    computed: {
        fullName: function() {
            const toUpperCaseStr = (str) => {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
            return `User name is: ${toUpperCaseStr(this.firstName)} - ${toUpperCaseStr(this.lastName)}`
        }
    },
    created: function() {
        //invoking a method from another component method
        this.userLoaded('from created fn');
    },
    methods: {
        userLoaded: function(p) {
            /*eslint-disable-next-line no-console*/
            console.log("i'm here " + p);
        }
    }
}
</script>