FROM haskell:7.8

RUN cabal update

# Add .cabal file
ADD ./assignment.cabal /opt/assignment/assignment.cabal

# Docker will cache this command as a layer, freeing us up to
# modify source code without re-installing dependencies
RUN cd /opt/assignment && cabal install --only-dependencies -j4

# Add and Install Application Code
ADD ./assignment /opt/assignment
RUN cd /opt/assignment && cabal install

# Add installed cabal executables to PATH
ENV PATH /root/.cabal/bin:$PATH

# Default Command for Container
WORKDIR /opt/assignment
CMD ["assignment"]
