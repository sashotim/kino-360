

	  // Sets the 'default' eye viewed by camera in non-VR mode

AFRAME.registerComponent('stereo', {

	      schema: {
	        eye: { type: 'string', default: "left"}
	      },
	      
		update: function(oldData){

            var object3D = this.el.object3D.children[0];
            var data = this.data;

            if(data.eye === "both"){
              object3D.layers.set(0);
            }
            else{
              object3D.layers.set(data.eye === 'left' ? 1:2);
            }

       },

	  });