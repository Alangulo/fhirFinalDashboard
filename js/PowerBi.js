class PowerBi {
    
    constructor(anchor, configAuth) {
        this.anchor = anchor;
        this.configAuth = configAuth;
    }

    render() {
        var aboutMe = this;
        aboutMe.anchor.html('Loading...');
        aboutMe.configAuth.getAboutMeInfo(function (userId, fhirServerUrl, accessToken) {
            const markup = `
                <Report
                tokenType="Embed" // "Aad"
                accessToken="H4sIAAAAAAAEAB2Sx66rVgBF_-VOiUQzxZHegG7AHAwHMDCj996J8u-5ynwNttba__x8oqsdovTn758HfIr7Hpxn4kR1OsKXIsF4WHU5YfVG35NXLTSeEIudEUlbFTKcSTY3dJ5Xw6gQeeCXYa6JqycOXU6ZohXHN2ehSb-wbovcSIDSZ-viF7qb32STPfecdptIg_N-vhk5CMNJdwS17xTzKIc50JVMLUwRmx-syq2fLh0_bSQtfIe9uu8mV_4TiM1eJ76rqhhGYcV7BN4yi1uY9-xqGepuSVWVfjZSLIA2IQrah4hYln4nGJogXMjhgalytjZMyUicELhcuWEe45TSDpE85CTjbPQMVjq9tt5FM6nJ9u2oadSlZ0S9WPAG7iVFa2fn0ln7-dpb48kqwBT3UUvxVBatu5It0l7bz2f54lDOMHCdkJDNA7vRszsqqmgl7y1aCAEMNBz9HG66ueL00LOVsD5Qa_OVJXhG34FOeBhk-DTp7AdjI_igIqewFkyuw7RT8fo5G-fgfJ_xRsCPo3SDBy7ZD9YNfD-wKGCCdMRNn42Gj7JLY7FgEl0Vya-dizNTYnYTk9nFMi_TZXzCv-cz0iatO7NF6DJaus9wYohN8pRSZIpoQHvEb0T_C7V9y1y_sHUFQ4X5Q0izIa67YmfSW8lXQejPUtP5OIbFQ7AUvaziTL24Anj27JrXzo4dqIeczXzAgQTe4FTEhRtoPKGz1zT29Abzic0Y84KZPkqB-qbZ95d0pVD68_PXjzBf4zro2fV7XYZfQ2p5FD3e4nORnlDH3qMS4UWK8vZOIt7gxm8nfwpP3NQZ8xYM9Oi8TbVoP5q1vrs68sVdw2iU36Xjw1owtxY2vmZBdw4slPjde6xNeACCYvIRuLFRrkjgPMc6eNdxOg4T1qDaqWaNYCIeKlJb8uSaav4S8btTSo3cdc2enxekeRWgvNLcVYw4YERYVKkyXqSIwB2S-UvuF95Xnb1FeLRhRymlqEGTj0WKG-jawUTMfioBXg3jm6U69hGgFnC68zXBtT38jINN35CIzgRlRaGsMDBoas8xte-iPbbto7_f_L3URUsQxsS8Rjo-dBlCUg9G0vK54WOZJGYaZdscorNaf_7XfI1lNqver-XlyBa7bEWPRvK3F4xA5m7u-J-CVdFH6zZnv5gPt5ycPnfXM61-cF9Ev_X23boOz9uflR3HVhAqhZzeuCRd3lpi5z7MycNZKWzbKWRsdJvmLU3k2vG7ZGQ3mC_5Odqen0nRNvZMDFAiM1LfCpNbrjV_EKqHGAl79cK0ySIpkdvKWwebkP22TGy_1tcdJym6NNIAZsEDAUS_qJYzkD16v3v0m7uR8apR8VUfarew_NwCPqDdTl6VymvZtUPUZOWvpmkVlxJwPhh7QSGGzJ-erY0Ged1tdvN0ez8SyxUgdOdM2-gjU-CEZEoGPRIMtaywuGNSjv6Y68QCq1x4AAOlZ_XCRyFjwIeod1OX6hpX5Fof29EF-8BtoLVTNX1zjPvV_O9_Eib2Na4FAAA=.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19" // accessToken goes here
                embedUrl="https://app.powerbi.com/reportEmbed?reportId=ffd96ae6-d380-4b0a-b892-9b10c1ccb332&groupId=c01c3203-966c-4a73-a8a9-50b6f9cc8bc8&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlfX0%3d" // embedUrl goes here
                embedId="ffd96ae6-d380-4b0a-b892-9b10c1ccb332" // report or dashboard Id goes here
                style={style}
                pageView="fitToWidth"
              />
            `;

            aboutMe.anchor.html(markup);

        });
    }
}